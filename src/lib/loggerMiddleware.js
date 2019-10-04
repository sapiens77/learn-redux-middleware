// 이전상태, 액션정보, 새로워진 상태를 순차적으로 콜솔에 보여준다.
const loggerMiddleware = store => next => action => {
  console.group(action && action.type); // 액션 타입으로 log를 그룹화 함
  console.log('이전상태', store.getState());
  console.log('액션', action);
  next(action); //다음 미들웨어 혹은 리듀서에게 전달
  console.log('다음상태', store.getState()); //업데이트된 상태
  console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;
