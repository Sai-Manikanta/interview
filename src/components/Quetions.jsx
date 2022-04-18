function Quetions({ searchedQuetion, setSearchedQuetion }) {
  return (
    <div>
        {searchedQuetion.map(quetion => (
            <div 
                key={quetion.id} 
                className="border bg-white p-3 my-2 rounded-sm"
            >
                <h2 
                    className="capitalize mb-2"
                    style={{ fontSize: '3rem', color: 'crimson' }}
                >
                    {quetion.quetion}
                </h2>
                <p style={{ fontSize: '3rem' }} className="text-blue-500">
                    {quetion.answer}
                </p>
            </div>
        ))}
    </div>
  )
}

export default Quetions