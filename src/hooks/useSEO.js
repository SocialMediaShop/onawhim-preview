import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useSEO({ title, description, image, schema } = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Update Title
    const defaultTitle = "On a Whim | Bespoke African Safaris & Tours";
    const activeTitle = title ? `${title} | On a Whim` : defaultTitle;
    document.title = activeTitle;

    // Helper to set meta content
    const setMetaContent = (attrName, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}='${attrValue}']`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Update Description
    const defaultDesc = "On a Whim offers bespoke African safaris and tours across South Africa, Zimbabwe, Zambia, and Botswana. Expert-guided, personalized journeys tailored to you.";
    const activeDesc = description || defaultDesc;
    
    setMetaContent("name", "description", activeDesc);
    setMetaContent("property", "og:description", activeDesc);
    setMetaContent("property", "twitter:description", activeDesc);

    // 3. Update Titles
    setMetaContent("property", "og:title", activeTitle);
    setMetaContent("property", "twitter:title", activeTitle);

    // 4. Update URLs
    const currentUrl = `https://onawhim.co.za${pathname === "/" ? "" : pathname.replace(/\/$/, "")}`;
    setMetaContent("property", "og:url", currentUrl);
    setMetaContent("property", "twitter:url", currentUrl);

    // 5. Update Image
    if (image) {
      setMetaContent("property", "og:image", image);
      setMetaContent("property", "twitter:image", image);
    }

    // 6. Update Schema (JSON-LD)
    let scriptElement = document.getElementById("dynamic-schema");
    if (schema) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.setAttribute("id", "dynamic-schema");
        scriptElement.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema, null, 2);
    } else {
      if (scriptElement) {
        scriptElement.remove();
      }
    }
  }, [title, description, image, schema, pathname]);
}
