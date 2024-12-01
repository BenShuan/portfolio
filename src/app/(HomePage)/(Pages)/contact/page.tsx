import ContactForm from "@/ui/ContactForm";
import Header from "@/ui/Header";
import InViewContainer from "@/ui/InViewContainer";

function Contant() {
  return (
    <InViewContainer>

    <div className="rounded-3xl bg-main-blue-light h-[85%] w-auto md:w-3/4 md:m-auto mx-8 mt-8 text-center flex flex-col py-3 ">
      <Header className="my-4 "  hasShadow={true} >Contact me for more</Header>

      <span className="bg-main-brown-dark h-2 w-10 rounded-lg items-center m-auto"></span>
      <ContactForm />
    </div>
    </InViewContainer>

  );
}

export default Contant;
