import Link from "next/link";
const Contact = () => {
  const contact_details = [
    {
      name: "Email",
      link: "mailto:hi@ishaanbedi.in",
      display: "hi@ishaanbedi.in",
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com/ishnbedi",
      display: "twitter.com/ishnbedi",
    },
    {
      name: "Github",
      link: "https://www.github.com/ishaanbedi",
      display: "github.com/ishaanbedi",
    },
  ];
  return (
    <div>
      <h3 className="font-semibold">Contact Me</h3>
      <ul className="font-light text-stone-200">
        {contact_details.map((contact, index) => (
          <li key={index}>
            <span className="font-semibold">{contact.name}: </span>
            <Link href={`${contact.link}`} target="_blank">
              <span className="pl-1">
                <span className="text-blue-400 hover:text-blue-400/90">
                  {contact.display}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
