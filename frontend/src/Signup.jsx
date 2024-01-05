import Doctors from './assets/doctors.svg';
import Logo from './assets/logo.svg';
import GoogleLogo from "./assets/googlelogo.svg";

const Signup = () => {
    return (
        <div className='h-screen flex items-center justify-around'>
            <img className='w-5/12 h-auto' src={Doctors} alt="doctorsImage"/>  
            <div className='flex flex-col justify-center w-5/12 max-w-md'> {/* Adjusted width and added max-width */}
                <div className='flex ml-3 items-center mb-5'>
                    <img className='w-10 h-14 mr-3' src={Logo} alt="logo"/> {/* Adjusted logo size */}
                    <div>
                        <h1 className='text-xl font-semibold'>DocTech</h1> {/* Smaller title */}
                        <p className='text-zinc-600 text-sm'>Keep Track of your patients!</p> {/* Smaller text */}
                    </div>
                </div>
                <h2 className='text-xl font-semibold'>Welcome Doctor!</h2> {/* Smaller title */}
                <form action="" className='flex flex-col mt-3 gap-4'>
                    <div className='flex'>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname x"
                            placeholder="First Name"
                            className='bg-neutral-100 rounded-lg border border-neutral-500 text-neutral-500 text-xl py-4 pl-3 w-1/2'
                        />
                        <input
                            type="text"
                            id="lastname"
                            name="lastname x"
                            placeholder="Last Name"
                            className='bg-neutral-100 rounded-lg border border-neutral-500 text-neutral-500 text-xl py-4 pl-3 ml-3 w-1/2'
                        />
                    </div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className='bg-neutral-100 rounded-lg border border-neutral-500 text-neutral-500 text-xl py-4 pl-3 mb-3'
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className='bg-neutral-100 rounded-lg border border-neutral-500 text-neutral-500 text-xl py-4 pl-3 mb-3'
                    />
                    <div className='flex'>
                        <select name="gender" id="gender" className='bg-neutral-100 rounded-lg border border-neutral-500 text-neutral-500 text-xl py-4 pl-3 w-1/2 mr-3'>
                            <option value="" disabled hidden>
                                Select Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input
                            type="age"
                            id="age"
                            name="age"
                            placeholder="Age"
                            className='bg-neutral-100 rounded-lg border border-neutral-500 text-neutral-500 text-xl py-4 pl-3 w-1/2'
                        />
                    </div>
                    <button type='submit' className='bg-indigo-800 rounded-lg text-white h-16 text-2xl font-medium mt-5'>
                        Sign Up 
                    </button>
                </form>
                {/* Adjusted styling for Google Register button */}
                <button className='bg-white rounded-lg border border-gray-400 text-gray-600 text-sm py-2 pl-2 mt-4 flex items-center gap-2 justify-center'>
                    <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5" /> {/* Adjusted Google logo size */}
                    <span>Register with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Signup;
