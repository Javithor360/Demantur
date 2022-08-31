const usersContactForm = async (req, res, next) => {
    try {
        const { name, dui, mail, cellnum } = req.body;
        console.log(name, dui, mail, cellnum);
    } catch (error) {
        setError(error.response.data.error);
    }
}
module.exports = { usersContactForm };