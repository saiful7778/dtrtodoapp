const SignIn = () => {
  return (
    <div className="container-box w-full md:w-1/2 mx-auto">
      <h3 className="text-3xl font-semibold text-center">Sign In</h3>
      <div className="flex flex-col gap-4 p-6">
        <div className="relative h-11 w-full min-w-[200px]">
          <input className="input-box peer" placeholder=" " />
          <label className="input-box-label">Email</label>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
