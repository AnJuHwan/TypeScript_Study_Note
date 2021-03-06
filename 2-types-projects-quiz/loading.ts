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
      console.log(`ěąęłľ! ${state.response.body}`);
    } else if (state.state === 'fail') {
      console.log(`ě¤í¨! ${state.reason}`);
    }
  }

  printLoginState({ state: 'loading' }); // đ loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // đ loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // đą no network
}
/*
function printLoginState(state: ResourceLoadState) {
  switch (state.state) {
    case 'loading':
      console.log('loading...');
      break;
    case 'success':
      console.log(`ěąęłľ! ${state.response.body}`);
      break;
    case 'fail':
      console.log(`ě¤í¨! ${state.reason}`);
      break;
    default:
      break;
  }
}

ěěěě ëě¨ ě˝ë
*/
