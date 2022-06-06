const avgSpeed = (distance, time) => {
  const velocity= (distance  / (time * 60)).toFixed(2);
  return `A velocidade média é ${velocity}m/s`;
};

module.exports = avgSpeed;