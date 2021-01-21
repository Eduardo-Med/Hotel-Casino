const conexionBancoCtrl = {};

const fetch = require('node-fetch');

conexionBancoCtrl.connetionBank = (req, res) => {

    const {
      Amount,
      CardNumber,
      Cvv,
      Month,
      Year,
      Name
    } = req.body

    const info = {
      AccountCompanyId: 5,
      Amount,
      CardNumber,
      Cvv,
      Description: "Pago del hotel",
      Month,
      Year,
      Name
    }
    
    fetch('http://bankith.gear.host/api/bank/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
    .then((res) => res.json())
    .then((result) => {
      if(result.error){
        res.json(result.error);
        console.log(result.error);
      }else{
        res.status(200).json(result);
        console.log(result);
      }
    }).catch((e) => {
      console.log(e);
    })
}

module.exports = conexionBancoCtrl;