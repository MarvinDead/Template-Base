import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import WhatsappChat from "../global/botonWhatsapp/BotonWhatsapp"

//

const LiveChat = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div>
      <WhatsappChat/>
      <div className="visor_Counter">
        <div class="elfsight-app-b8a56f1e-13f0-420d-a542-091d4e218b2d"></div>
      </div>
    </div>
  );
};

export default LiveChat;
