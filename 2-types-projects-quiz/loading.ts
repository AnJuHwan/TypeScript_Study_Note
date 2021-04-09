{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(state: ResourceLoadState) {
    if (state.state === 'loading') {
      console.log(`loading...`);
    } else if (state.state === 'success') {
      console.log(`성공! ${state.response.body}`);
    } else if (state.state === 'fail') {
      console.log(`실패! ${state.reason}`);
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
/*
function printLoginState(state: ResourceLoadState) {
  switch (state.state) {
    case 'loading':
      console.log('loading...');
      break;
    case 'success':
      console.log(`성공! ${state.response.body}`);
      break;
    case 'fail':
      console.log(`실패! ${state.reason}`);
      break;
    default:
      break;
  }
}

영상에서 나온 코드
*/
