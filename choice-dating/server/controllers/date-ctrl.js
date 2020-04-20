const Date = require('../models/date-model')

createDate = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a date',
        })
    }

    const date = new Date(body)

    if (!date) {
        return res.status(400).json({ success: false, error: err })
    }

    date
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: date._id,
                message: 'Date created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Date not created!',
            })
        })
}

updateDate = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Date.findOne({ _id: req.params.id }, (err, date) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Date not found!',
            })
        }
        date.id   = body._id;
        date.name = body.name;
        date.description = body.description;
        date.time = body.time;
        date.type = body.type;
        date.rating = body.rating;
        date
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: date._id,
                    message: 'Date updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Date not updated!',
                })
            })
    })
}

deleteDate = async (req, res) => {
    await Date.findOneAndDelete({ _id: req.params.id }, (err, date) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!date) {
            return res
                .status(404)
                .json({ success: false, error: `Date not found` })
        }

        return res.status(200).json({ success: true, data: date })
    }).catch(err => console.log(err))
}

getDateById = async (req, res) => {
    await Date.findOne({ _id: req.params.id }, (err,date ) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!date) {
            return res
                .status(404)
                .json({ success: false, error: `Date not found` })
        }
        return res.status(200).json({ success: true, data: date })
    }).catch(err => console.log(err))
}

getDates = async (req, res) => {
    await Date.find({}, (err, dates) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!dates.length) {
            return res
                .status(404)
                .json({ success: false, error: `Date not found` })
        }
        return res.status(200).json({ success: true, data: dates })
    }).catch(err => console.log(err))
}

module.exports = {
    createDate,
    updateDate,
    deleteDate,
    getDates,
    getDateById,
}