import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.swstring("v1")
	.swstring("v2")
	.swstring("v3")
	.swstring("v4")
	.uint32("v5")
	.uint32("v6")
	.swstring("v7")
	.swstring("v8")