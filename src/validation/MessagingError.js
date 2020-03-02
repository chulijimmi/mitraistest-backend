module.exports = {
    "mobileNumber": {
        "isRequired": {
            "error": 201,
            "success": false,
            "message": "Mobile number is required"
        },
        "isExist": {
            "error": 201, 
            "success": false, 
            "message": "Your mobile number is exist, plase use another"
        },
        "isNotValid": {
            "error": 201, 
            "success": false, 
            "message": "Please enter valid indonesian mobile number"
        }
    },
    "firstName": {
        "isRequired": {
            "error": 202,
            "success": false,
            "message": "First name is required"
        }
    },
    "lastName": {
        "isRequired": {
            "error": 203,
            "success": false,
            "message": "Last name is required"
        }
    },
    "email": {
        "isRequired": {
            "error": 204,
            "success": false,
            "message": "Email is required and should valid email address"
        },
        "isExist": {
            "error": 204,
            "success": false,
            "message": "Your email is not available, plase use other"
        }
    }
}