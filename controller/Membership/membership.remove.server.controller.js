var modelMembership = require('../../shema/membership');
exports.remove=function(req,res,next){
     modelMembership.remove({ _id: req.id}, function (err) {
      if (err) res.send(500, err);
         res.json(200,{message:'SUCCESS_REMOVE'});
      // removed!
    });
}
