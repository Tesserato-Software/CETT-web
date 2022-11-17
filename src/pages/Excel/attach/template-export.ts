import { DateTime } from "ts-luxon";
import { Egress } from "../../../models/Egress";
import { ExcelService } from "../../../services/excel-service";

// Função que export os usuários
export const template_export = async () =>
{    
    const sheet = new ExcelService(),
        now = DateTime.now()

    sheet.setColumnSizes([25, 50, 20, 30, 50]); // tamanho das colunas
    sheet.addTitleRow([`Template egressos`]);
    sheet.addSubtitleRow(["ID", "Nome", "CGM", "Aniversário", "Responsável"]); // colunas

    const buffer = await sheet.finishSheet();
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

    return new Blob([buffer], { type: fileType });
}