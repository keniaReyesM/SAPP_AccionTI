
/**
 * @author Kenia Reyes
 */

 const API_CONFIG = {
    PROTOCOLO: "http://",
    HOST: window.location.hostname,
    PORT: ":81",
    CONTEXT: "/sapp/api/"
};

export const API_PATH = API_CONFIG.PROTOCOLO.concat(
    API_CONFIG.HOST,
    API_CONFIG.PORT,
    API_CONFIG.CONTEXT
);


