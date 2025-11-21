const PrimaryButton = ({ text, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className="rounded-lg bg-pink-ia text-white py-4 px-6 font-medium text-xl transition-all duration-150 ease-in-out cursor-pointer shadow-[0_6px_0_0_rgba(157,23,77,1)] active:shadow-[0_2px_0_0_rgba(157,23,77,1)] active:translate-y-[4px] hover:brightness-110 border-b-[3px] border-pink-950"
        >
            {text}
        </button>
    );
}

export default PrimaryButton;