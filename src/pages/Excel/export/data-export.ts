import { DateTime } from "ts-luxon";
import { Egress } from "../../../models/Egress";
import { ExcelService } from "../../../services/excel-service";

// Função que export os usuários
export const data_export = async (users: Egress[]) =>
{    
    const sheet = new ExcelService(),
        now = DateTime.now()

    sheet.setColumnSizes([30, 30, 50]); // tamanho das colunas
    sheet.addTitleRow([`Usuários egressos - ${now.toLocaleString(DateTime.DATETIME_MED)}`]);
    sheet.addSubtitleRow([]); // colunas

    const userRows = users.map(({  }) => [ // importa do user
    ]); // formata
    sheet.addRows(userRows);
    const buffer = await sheet.finishSheet();
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

    return new Blob([buffer], { type: fileType });
}