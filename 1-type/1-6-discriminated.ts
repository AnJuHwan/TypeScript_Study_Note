{
  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 성공 body
  // fail -> 실패 reason

  function printLoginState(state: LoginState) {
    // "response" 값이 state에 있다면
    if (state.result === "success") {
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
}
// Error: 1-5 , 1-6 에서 같은 이름의 함수를 사용해서 오류가 남.
// ts --init 을 하면 tsconfig.json 생김 설정하고 삭제하면 다시 초기상태로 돌아감.

// 1.

// 터미널에서 현재 경로에서 tsc --init을 하셔서 tsconfig.json 파일이 생기면

// target을 es6로 그리고 strict이 true로 되어 있는지 확인해 보세요

// 2.

// 또는 그냥 블럭 앞에 네임스페이스를 추가해 주시면 되어요

// namespace Union {

//     ... 코드들

// }
