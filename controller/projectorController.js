const pool = require('../db');

const createProjectorType = async (req, res) => {
    const { title, description } = req.body;
    try {
        await pool.query(
            'INSERT INTO projectorTypes (title, description) VALUES (?, ?)',
            [title, description]
        );
        res.send('Projector type created successfully');
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

const getAllProjectorTypes = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM projectorTypes');
        res.json(rows);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

const getOneProjectorType = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows, fields] = await pool.query('SELECT * FROM projectorTypes WHERE id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).send('Projector type not found');
        } else {
            res.json(rows[0]);
        }
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

const updateProjectorType = async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    try {
        await pool.query(
            'UPDATE projectorTypes SET title = ?, description = ? WHERE id = ?',
            [title, description, id]
        );
        res.send('Projector type updated successfully');
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

const deleteProjectorType = async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM projectorTypes WHERE id = ?', [id]);
        res.send('Projector type deleted successfully');
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

module.exports = {
    createProjectorType,
    getAllProjectorTypes,
    getOneProjectorType,
    updateProjectorType,
    deleteProjectorType
};
