const authService = {
    // Signin
    async signIn(user_name: string, password: string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (user_name === 'daya' && password === '123') {
                resolve( 
                    {
                        jsonrpc: "2.0",
                        id: null,
                        result: {
                            status: "ok",
                            message: "Successfully logged in!",
                            data: {
                                name: "Daya hospital portal",
                                user_id: 288,
                                user_role: "user",
                                token: "6q0LLX5wJthexuxQl9IAV1cuTLsSnS"
                            }
                        }
                    });
                
              } else {
                reject({
                    status: "error",
                    message: "Wrong Credentials! your email Id or password entered is wrong"
                  });
              }
            }, 500); // Simulate a 500ms delay
          });
    }

    // We can add more here...
}


export default authService