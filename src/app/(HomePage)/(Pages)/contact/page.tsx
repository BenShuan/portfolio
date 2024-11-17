import Button from "@/app/ui/Button";
import Header from "@/app/ui/Header";
import TextInput from "@/app/ui/TextInput";

function Contant() {
  return (
    <div className="rounded-3xl bg-main-blue-light h-[90%] w-auto md:w-3/4 md:m-auto mx-8 mt-8 text-center flex flex-col py-3 ">
      <Header className=" text-slate-800  my-4">Contact me for more</Header>

      <span className="bg-main-brown-dark h-2 w-10 rounded-lg items-center m-auto"></span>

      <form className="flex flex-col items-center gap-1 flex-grow ">
        <TextInput name="Name" id="name" placeholder="Name" />
        <TextInput name="Email" id="email" placeholder="Email" />
        <TextInput
          name="Message"
          id="message"
          placeholder="Message"
          className=" flex-grow "
        />

        <div className="w-3/4 text-start">
          <Button color="green" layout="full" className="my-3">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contant;
