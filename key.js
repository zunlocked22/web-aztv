module.exports = (req, res) => {
  const ua = req.headers['user-agent'] || '';
  const allowedAgents = ['OTT Navigator', 'ExoPlayer', 'Dalvik', 'IPTV', 'TV', 'SmartTV'];

  if (!allowedAgents.some(agent => ua.includes(agent))) {
    return res.status(403).send('Access Denied');
  }

  const keys = {
    history: 'a7724b7ca2604c33bb2e963a0319968a:6f97e3e2eb2bade626e0281ec01d3675',
    bbcearth: '34ce95b60c424e169619816c5181aded:0e2a2117d705613542618f58bf26fc8e',
    fashiontv: '971ebbe2d887476398e97c37e0c5c591:472aa631b1e671070a4bf198f43da0c7',
    hbosignature: 'a06ca6c275744151895762e0346380f5:559da1b63eec77b5a942018f14d3f56f'
  };

  const id = req.query.id;
  const key = keys[id];

  if (!key) {
    return res.status(404).send('Key not found');
  }

  res.type('text/plain').send(key);
};
