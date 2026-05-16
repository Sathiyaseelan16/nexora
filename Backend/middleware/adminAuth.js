const jwt =
 require("jsonwebtoken");

module.exports =
 function (req, res, next) {

  try {

    const token =
      req.headers.authorization;

    if (!token) {

      return res.status(401).json({

        success: false,

        message: "No Token"

      });

    }

    const verified =
      jwt.verify(

        token,

        "mysecretkey"

      );

    if (!verified.isAdmin) {

      return res.status(403).json({

        success: false,

        message:
         "Admin Access Only"

      });

    }

    req.user = verified;

    next();

  } catch (error) {

    res.status(401).json({

      success: false,

      message:
       "Invalid Token"

    });

  }

};