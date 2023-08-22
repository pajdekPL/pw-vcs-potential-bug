export const testUser = {
  login: process.env.USER_LOGIN ?? raiseEnvNotSetError("USER_LOGIN"),
  password: process.env.USER_PASSWORD ?? raiseEnvNotSetError("USER_LOGIN"),
};

function raiseEnvNotSetError(env: string): never {
  throw new Error(`Please set env: ${env}`);
}
