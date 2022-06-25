/**
 * @author Kenia Reyes
 */

import moment from "moment";
import toast from 'react-hot-toast';

export default class Utileria {

    static FORMAT_DATE = "DD/MM/YYYY";
    static FORMAT_DATE_US = "YYYY-MM-DD"
    static FORMAT_DATE_TIME = "DD/MM/YYYY HH:mm";
    static FORMAT_TIME = "HH:mm";

    static isEmptyObject(object) {
        return Object.keys(object).length === 0 && object.constructor === Object;
    }

    static nonEmptyObject(object) {
        return !this.isEmptyObject(object)
    }

    static notifications(msj, type) {


        if (type === 'ERROR') {
            toast(msj, { style: { background: '#BC4239', color: 'white', fontWeight: "bold" } });
        } else if (type === 'SUCCESS') {
            toast(msj, { style: { background: '#00A884', color: 'white', fontWeight: "bold" } });
        } else if (type === 'INFO') {
            toast.info(msj);
        } else if (type === 'WARNING') {
            toast(msj, { style: { background: '#FFC300', color: 'white', fontWeight: "bold" } });
        } else if (type === 'DEFAULT') {
            toast.info(msj);
        }

    }

    static errorhttp(error) {
        let response = error.response;
        let status = 0;
        if (response !== undefined && Number(response.status) !== undefined) {
            status = response.status;
        }

        switch (status) {
            case 401:
                this.notifications("No estás autorizado para ver el recurso solicitado.", "ERROR");
                break;
            case 403:
                this.notifications("No tienes permisos para realizar la tarea.", "WARNING");
                break;
            case 404:
                this.notifications("No se encontró el recurso que solicitó.", "WARNING");
                break;
            case 400:
                this.notifications(response.data || "Problemas en el servidor, notifique al administrador.", "WARNING");
                break;
            default:
                this.notifications("Problemas en el servidor, notifique al administrador.", "ERROR");
        }
    }

    static validateDate(date) {
        return moment(date, this.FORMAT_DATE, true).isValid()
    }

    static endOfDay(date) {
        if (this.nonEmpty(date)) {
            return moment(date).endOf('day');
        }
        return null;
    }
    static startOfDay(date) {
        if (this.nonEmpty(date)) {
            return moment(date).startOf('day');
        }
        return null;
    }

    static formatDateDefault(date) {
        return moment(date).format()
    }

    static formatDate(date) {
        return moment(new Date(date)).locale("es").format("DD/MM/YYYY") || "---";
    }

    static formatDateTime(date) {
        if (this.nonEmpty(date)) {
            return moment(new Date(date)).locale("es").format("DD/MM/YYYY hh:mm a")
        }
        return null;
    }

    static formatTime(date) {
        if (this.nonEmpty(date)) {
            return moment(new Date(date)).format("hh:mm a")
        }
        return null;
    }


    static stringBase64ToFile(dataurl, filename) {
        var arr = dataurl.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);

        }
        return new File([u8arr], filename, {
            type: mime
        });
    }


    static isEmptyList(list) {
        if (list !== null && list !== undefined && Array.isArray(list)) {
            return list.length === 0;
        }
        return true;
    }
    static nonEmptyList(list) {
        return !this.isEmptyList(list)
    }

    static nonEmpty(data, valueDafault) {
        if (valueDafault !== null && valueDafault !== undefined && valueDafault !== "") {
            if (data !== null && data !== undefined && data !== "") {
                return data;
            } else {
                return valueDafault;
            }
        }
        return data !== null && data !== undefined && data !== "";
    }
    static isEmpty(data) {
        return !this.nonEmpty(data);
    }

    static downloadZIP(data, filename) {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(new Blob([data], {
            type: "application/zip"
        }));
        link.setAttribute("download", filename || "Descarga.zip");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    static openPDF(data) {
        window.open(URL.createObjectURL(new Blob([data], {
            type: 'application/pdf'
        })));
    }
    static downloadXLSX(data, fileName) {
        const url = URL.createObjectURL(new Blob([data], {
            type: "application/vnd.ms-excel"
        }));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
    }

    static isNull(date) {
        return date === null || date === undefined;
    }

    static isNonNull(data) {
        return !this.isNull(data);
    }

    static isJSON(dataType) {
        return dataType === "json" || dataType === "application/json";
    }

    static catchError(e) {
        this.notifications(e || 'Ocurrió un error interno, intente nuevamente', "ERROR");
    }

    static claseInputForm = (errores, touched) => {
        if (errores && touched) {
            return 'has-danger';
        }
        if (!errores && touched) {
            return 'has-success';
        }
        return '';
    };

    static errorInput = (errors) => {
        return (<small className="text-danger">   {errors.usuario} </small>)
    };

    static sinToken(){
        return this.isEmpty(window.localStorage.getItem('access_token'));
    }
    
    static conToken(){
        return !this.sinToken()
    }
    
    static obtenerUsuario(){
        return JSON.parse(window.localStorage.getItem('sapp_usuario'));
    }
}