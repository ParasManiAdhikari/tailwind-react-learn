export default function Test2() {
    return (
        <div className="min-h-screen">
            <div className="bg-[#b4b440] p-6">
                <div className="flex justify-between mb-8">
                    <span>COMPANY NAME</span>
                    <span>MONTH XX YEAR</span>
                </div>

                <h1 className="text-9xl font-bold min-w-4xl mx-auto mb-8 text-center">
                    <div>Midi Mod</div>
                    <div>Theme</div>
                </h1>
            </div>

            <div className="flex">
                <div className="w-2/3">
                    <img src="https://images.unsplash.com/photo-1471443290059-92acdee54040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="hill" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/3 bg-pink-200 p-8">
                <p className="text-2xl">Just in case you need space to cover.</p>
                </div>
            </div>
        </div>
    )
}
