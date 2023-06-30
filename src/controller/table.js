import { addChild } from "https://jscroot.github.io/element/croot.js";
import { getRandomColor, getRandomColorName } from "https://jscroot.github.io/image/croot.js";
import { presensiTag, presensiClass, presensiContent } from "../template/table.js";

export function isiTablePresensi(results) {
    results.forEach(isiRow);
}

function isiRow(value) {
    let content = presensiContent.replace("#NAMA#",
        value.Biodata.Nama).replace("#PHONENUMBER#", value.Phone_number).replace("#LOKASI#", value.Location).replace("#KET#", value.Checkin).replace("#MASUK#", value.Datetime).replace("#PULANG#", value.Datetime).replace("#DURASI#", value.Datetime).replace("#WARNA#", getRandomColor()).replace(/#WARNALOGO#/g, getRandomColorName());
    addChild("presensi", presensiTag, presensiClass, content);
}

import { setInner } from "https://jscroot.github.io/element/croot.js";
import { postWithToken } from "https://jscroot.github.io/api/croot.js";

function headingContent(result) {
    setInner(result.message); // json object 
}

let datainjson = {
    "namadepan": namadepan,
    "namabelakang": namabelakang,
    "email": email,
    "password": password
}

postWithToken("https://foo.bar", "Token", "dsf9ygf87h98u479y98dj0fs89nfd7", datainjson, headingContent);

