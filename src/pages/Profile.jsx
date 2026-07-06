import { useAuth } from "../context/AuthContext";

const Profile = () => {
    const { user, logout } = useAuth();
    return (
        <div className="max-w-3xl mx-auto mt-10 bg-card rounded-xl p-8 shadow">
            <h1 className="text-3xl font-serif mb-8">
                My Profile
            </h1>
            <div className="space-y-4">
                <p>
                    <strong>Name :</strong>
                    {" "}
                    {user.name}
                </p>
                <p>
                    <strong>Email :</strong>
                    {" "}
                    {user.email}
                </p>
                <p>
                    <strong>Role :</strong>
                    {" "}
                    {user.role}
                </p>
            </div>
            <button
                onClick={logout}
                className="mt-8 bg-red-500 text-white px-6 py-3 rounded-xl"
            >
                Logout
            </button>
        </div>
    );
};

export default Profile;