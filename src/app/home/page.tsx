import Navbar from "../components/Navbar";

export default function HomePage() {
    return (
        <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <Navbar />
            <h1>Home Page</h1>
        </div>
    );
}