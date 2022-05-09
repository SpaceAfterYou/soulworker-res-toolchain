import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.int32("v1")
	.int32("v2")
	.int16("v3")
	.int16("v4")
	.int16("v5")
	.int16("v6")
	.int16("v7")
	.int16("v8")
	.int32("v9")
	.int16("v10")
	.int16("v11")