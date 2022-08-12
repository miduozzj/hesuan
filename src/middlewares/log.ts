const loggerInfo = async (req, res, next) => {
  try {
    console.log('发送请求');
    next();
  } catch(err){
    console.log('请求出错');
  }
};

export default loggerInfo;