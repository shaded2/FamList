module.exports = function(mongoose) {
    var collection = 'users';
    var Schema = mongoose.Schema;

    var schema = new Schema({
        name: {
                first: {type: String, required: true},
                last: {type: String, required: true}
              },
        role: {type: Number},
        user_name: {type: String, required: true, validate: [/^[a-z0-9_-]{3,15}$/, 'Minimum 3 characters, Maximum 15 characters']},
        password: {type: String, required: true, validate: [/(?=^.{6,}$)(?=.*\d)(?=.*[A-Za-z]).*$/, 'Must have 6 character minimum, upper-case or lower-case letters and at least one digit']},
        email: {type: String, required: true, validate: [/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/, 'Invalid email']},
        salt: {type: String, required: true},
        created: {type: Date, default: Date.now},
        last_modified: {type: Date, default: Date.now}
    });

    return mongoose.model(collection, schema);
};