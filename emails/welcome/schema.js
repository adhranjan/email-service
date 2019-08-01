module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Welcome Email",
    "description": "Sending welcome to new user",
    "type": "object",
    "properties": {
        "name": {
            "description": "Name of the person",
            "type": "string",
        },
        "to": {
            "description": "Email of the person",
            "type": "string",
        },
    },
    "required": ["name", "to"]
};