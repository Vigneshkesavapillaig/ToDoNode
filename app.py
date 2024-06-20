from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, JSON, DateTime
from sqlalchemy.orm import validates
from datetime import datetime
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure SQLAlchemy with psycopg2
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:Vignesh@localhost/todo_app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Database connection parameters
DB_PARAMS = {
    'dbname': 'todo_app',
    'user': 'postgres',
    'password': 'Vignesh',
    'host': 'localhost',
    'port': 5432
}

def get_db_connection():
    """Helper function to get a database connection using psycopg2."""
    conn = psycopg2.connect(**DB_PARAMS)
    return conn

# Define AdditionalList model
class AdditionalList(db.Model):
    __tablename__ = 'AdditionalLists'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    items = Column(JSON, default=[])
    createdAt = Column(DateTime, default=datetime.utcnow)
    updatedAt = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

# Routes
@app.route('/api/additionalLists/getAdditionalLists', methods=['GET'])
def get_additional_lists():
    try:
        conn = get_db_connection()
        cur = conn.cursor(cursor_factory=RealDictCursor)
        cur.execute('SELECT * FROM "AdditionalLists"')
        lists = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify(lists)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/additionalLists/addAdditionalList', methods=['POST'])
def add_additional_list():
    data = request.get_json()
    title = data.get('title')
    items = data.get('items', [])

    if not title or title.strip() == '':
        return jsonify({'error': 'Title is required'}), 400

    try:
        new_list = AdditionalList(title=title, items=items)
        db.session.add(new_list)
        db.session.commit()
        return jsonify({'new_id': new_list.id}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/api/additionalLists/updateAdditionalList/<int:id>', methods=['PUT'])
def update_additional_list(id):
    data = request.get_json()
    title = data.get('title')
    items = data.get('items', [])

    if id is None:
        return jsonify({'error': 'ID is required for update'}), 400

    try:
        list_to_update = AdditionalList.query.get(id)
        if not list_to_update:
            return jsonify({'message': 'List not found'}), 404

        # Update fields if provided
        if 'title' in data:
            list_to_update.title = title
        list_to_update.items = items

        db.session.commit()
        return jsonify({
            'id': list_to_update.id,
            'title': list_to_update.title,
            'items': list_to_update.items,
            'createdAt': list_to_update.createdAt,
            'updatedAt': list_to_update.updatedAt
        }), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/api/additionalLists/deleteAdditionalList/<int:id>', methods=['DELETE'])
def delete_additional_list(id):
    if id is None:
        return jsonify({'error': 'ID is required for delete'}), 400

    try:
        list_to_delete = AdditionalList.query.get(id)
        if not list_to_delete:
            return jsonify({'message': 'List not found'}), 404

        db.session.delete(list_to_delete)
        db.session.commit()
        return jsonify({'message': 'List deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
