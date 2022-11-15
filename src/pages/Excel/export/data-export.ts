import { DateTime } from "ts-luxon";
import { Egress } from "../../../models/Egress";
import { ExcelService } from "../../../services/excel-service";

// Função que export os usuários
export const data_export = async (users: Egress[]) =>
{    
    const sheet = new ExcelService(),
        now = DateTime.now()

    sheet.setColumnSizes([25, 50, 20, 25, 35, 50]); // tamanho das colunas
    sheet.addTitleRow([`Usuários egressos - ${now.toLocaleString(DateTime.DATETIME_MED)}`]);
    sheet.addSubtitleRow(["ID do sistema", "Nome", "CGM", "ID no arquivo", "Data de Aniversário", "Nome Responsável"]); // colunas

    const userRows = users.map(({id, name, CGM_id, arq_id, birth_date, responsible_name}) => [ // importa do user
        id,    
        name,
        CGM_id,
        arq_id,
        birth_date ? DateTime.fromISO(birth_date).toLocaleString(DateTime.DATE_MED) : "DD/MM/AAAA",  
        responsible_name
    ]);
    sheet.addRows(userRows);
    const buffer = await sheet.finishSheet();
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

    return new Blob([buffer], { type: fileType });
}