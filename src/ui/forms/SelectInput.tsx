"use client";


interface SelectInput extends React.SelectHTMLAttributes<HTMLSelectElement> {
  data: string[];
}

const SelectInput = ({ data = [], name, className, ...rest }: SelectInput) => {
  // const [searchParams, setSearchParams] = useState("");

  // const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // const [openList, setOpenList] = useState(false);

  // const addSelection = (option:string) => {


  //   const selectIndex = selectedItems.findIndex(
  //     (tech) => tech.toLowerCase() === option.toLowerCase()
  //   );

  //   console.log('option', selectIndex)

  //   let newArray = selectedItems;

  //   if (selectIndex == -1) {
  //     newArray.push(option);
  //     console.log('add newArray', newArray)
  //   } else {
  //     newArray = newArray.filter((key) => key.toLowerCase() !== option.toLowerCase());
  //     console.log('remove newArray', newArray)


  //   }

  //   setSelectedItems(newArray);
  // };


  return (
    <div
      className={`text-slate-800  *:rounded-lg flex flex-col gap-2 items-start  ${className}` }
    >
      <label className="my-1" htmlFor={name}>
        {name?.toLocaleUpperCase()}
      </label>

      <select name={name} id={name} className="w-full text-wrap" size={2}  {...rest}>
      {data?.map((filterOpt) => (
                <option className="w-min px-2 m-2 py-1 inline-flex rounded-full  " key={filterOpt} >
                  {filterOpt}
                </option>
              ))}
      </select>

      {/* <div className="w-full h-full flex gap-8">
        <div className=" h-full w-1/2 flex relative">
          <input
            name={name}
            id={name}
            className={`w-10/12 rounded-l-xl z-[1] ${className}`}
            type="search"
            onChange={(e) => setSearchParams(e.currentTarget.value)}
            {...rest}
          />
          <input
            className={`w-2/12 bg-white rounded-r-xl z-[1] `}
            type="button"
            value={"V"}
            onClick={() => setOpenList((prev) => !prev)}
          />
          <ul
            className={`absolute w-full  bg-white pt-4 top-[70%]   ${
              openList || searchParams.length !== 0
                ? " opacity-100 translate-y-0  scale-y-100 "
                : " opacity-0 -translate-y-10 scale-y-0 "
            }  transition-all rounded-xl overflow-scroll duration-700 `}
          >
            {data
              .filter((opt) =>
                opt.toLowerCase().startsWith(searchParams.toLowerCase())
              )
              .map((filterOpt) => (
                <li key={filterOpt} className="size-full">
                  <SelectOption changeItems={addSelection} name={filterOpt} />
                </li>
              ))}
          </ul>
        </div>

        <div className=" h-full w-1/2 flex ">
          {
            selectedItems.map(item => <span key={item}>{item}</span>)
          }
        </div>
      </div> */}
    </div>
  );
};

export default SelectInput;
