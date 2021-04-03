{
  // Union Types: OR
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
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
    if ("response" in state) {
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
  // 이보다 더 좋은 방법 1-6
}

// 오브젝트를 만드는 경우에는 , 쉼표로 구분을 하구요
// 타입 정의, 인터페이스 정의는 ; 세미클론으로 구분을 해요
