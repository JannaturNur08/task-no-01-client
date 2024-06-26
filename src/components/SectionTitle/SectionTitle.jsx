

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <div className="md:w-4/12 text-center mx-auto my-8">
            <p className="text-[#D99904] mb-2">{subHeading}</p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
        </div>
    );
};

export default SectionTitle;