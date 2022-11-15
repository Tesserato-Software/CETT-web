export default function FileValidator(
	size: number,
	AcceptedFileTypes: any,
	values: any
) {
	if (values!!) {
		if (AcceptedFileTypes.indexOf(values.type) >= 0) {
			return !(values.size > size);
		} else if (AcceptedFileTypes.indexOf(values.type) < 0) {
			return false;
		}
	}
}
