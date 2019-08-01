module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Case Alert",
    "description": "Verify Case alert before adding in firebase",
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