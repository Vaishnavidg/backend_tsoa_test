export enum errorMessages {
    BRAND_ID_EXISTS = 'Book ID already exists',
    BRAND_EXISTS = 'Book already exists',
    BRAND_NOT_FOUND = 'Book does not exist',
    DELETE_SUCCESS = 'Book deleted successfully',
    DELETE_FAILURE = 'Delete operation failed',
    BRAND_UNPUBLISHED = 'Book is unpublished'
}

export enum responseCodes {
    NOT_FOUND = 404,
    OK = 200,
    FORBIDDEN = 403,
    ERROR = 500,
    BAD_REQUEST = 400,
    CREATED = 201,
    UNPROCESSABLE_ENTITY = 422,
}

export enum responseMessages {
	BAD_REQUEST = 'Invalid Request',
	ERROR = 'Something went wrong',
	URL_NOT_FOUND = 'Make sure url is correct!!!',
	ID_GEN_FAILURE = 'ID Generation Service Failed',
	HEALTH_CHECK = 'Health Check Successful',
	CATEGORY_MODIFIED = 'Category is modified',
	CATEGORY_NOT_MODIFIED = 'Category not modified',
	PRODUCT_MODIFIED = 'Product is modified',
	PRODUCT_NOT_MODIFIED = 'Product not modified',
	BRAND_MODIFIED = 'Book is modified',
	BRAND_NOT_MODIFIED = 'Book not modified',
	MODEL_MODIFIED = 'Model is modified',
	MODEL_NOT_MODIFIED = 'Model not modified',
	SPAREPART_MODIFIED = 'SparePart is modified',
	SPAREPART_NOT_MODIFIED = 'SparePart not modified',
	GENERIC_SPAREPART_MODIFIED = 'Generic SparePart is modified',
	GENERIC_SPAREPART_NOT_MODIFIED = 'Generic SparePart not modified',
	ISSUE_MODIFIED = 'Issue is modified',
	ISSUE_NOT_MODIFIED = 'Issue not modified',
	TRANSACTION_ABORTED = 'Transaction is aborted',
	PINCODE_MODIFIED = 'Pincode is modified',
	PINCODE_NOT_MODIFIED = 'Pincode not modified',
	OK = 'OK',
	CREATED = 'CREATED',
	SYMPTOMS_NOT_FOUND = 'Symptoms not found',
	REPAIRACTION_NOT_FOUND = 'Repair Action not found',
	MODEL_WITH_MODELNO_EXISTS =
		'Model number already exists',
	USER_MGMT_FAILURE = 'User Management API Error',
}
