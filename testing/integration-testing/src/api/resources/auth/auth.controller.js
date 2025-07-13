const register = async (req, res) => {
    try {
        const { email, password, passwordConfirm } = req.body || {};
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'All fields are required' });
        }
        if(password.length < 5){
            return res
                .status(400)
                .json({ message: 'password should be > 5 chars' });
        }
        if(password !== passwordConfirm){
            return res
                .status(400)
                .json({ message: 'confirmPass should match password' });

        }
        return res.status(200).json({
            message: 'registerd successfully',
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'failed to register' });
    }
}

module.exports = {
register    
}