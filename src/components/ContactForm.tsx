const ContactForm = () => {

  const msFormsURL = "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAALKeg3lUMVUyS0xaSU1BUTlHMU5JVTNUVURQRzRPQS4u&embed=true"
  const sandboxSettings = 'allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-forms allow-orientation-lock allow-downloads'

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <iframe 
            width="640px"   
            height="1050px" 
            src={msFormsURL}
            style={{ border: "none", maxWidth: "100%" }} 
            sandbox={sandboxSettings}
            > </iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;