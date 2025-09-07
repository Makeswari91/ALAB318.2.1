export default function globalErr(err, req, res, next) {
    res.status(500).send(err.message);
 };