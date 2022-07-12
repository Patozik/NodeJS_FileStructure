const User = require('../db/models/user');


class UserController {

    async showUsers (req, res) {

        const users = await User.find({});

        res.render('pages/users', { 
            users: users,
            title: 'Użytkownicy',
        });
    
    }

    async showUser (req, res) {
        const { id, mode } = req.params;
        const user = await User.findOne({_id: id});
        let html;
        
        if(!user) {          
            html = 'Nie ma takiego usera';           
        } else {
            html = (`Dane uzytkownika: imie "${user.name}"`);
            
            if (mode && mode === 'szczegoly'){
                html +=` id "${user.id}", email "${user.email}"`;
            } else if (mode && mode != 'szczegoly') {
                html = `Brak podstrony /${mode}`;
            }
        }
        res.render('pages/user', { 
            html: html,
            title: user?.name ?? 'Brak uzytkownika',
        });
    }

}

module.exports = new UserController();