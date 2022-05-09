import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint16("v1")
	.uint8("v2")
	.swstring("v3")
	.swstring("v4")
	.swstring("v5")
	.swstring("v6")
	.swstring("v7")