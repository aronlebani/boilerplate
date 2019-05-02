import logging
logger = logging.getLogger(__name__)

import boto3
import os

class S3:
    '''
    A wrapper class for the Amazon s3 SDK
    '''
    def __init__(self):
        self.s3 = boto3.resource('s3')
        self.S3_NAME = 'BUCKET_NAME'

    def getObject(self, name):
        try:
            object = self.s3.Object(self.S3_NAME, name)
            return object.get()
        except Exception as error:
            logger.error(error)
            raise

    def putObject(self, body, name):
        try:
            object = self.s3.Object(self.S3_NAME, name)
            object.put(Body=body)
        except Exception as error:
            logger.error(error)
            raise
