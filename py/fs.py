import logging
logger = logging.getLogger(__name__)

class Fs:
    def __init__(self):
        self._prefix = '/tmp/'

    def writeFileToDisk(self, name, body):
        try:
            output_file = open(self._prefix + name, 'wb')
            output_file.write(body)
            output_file.close()
        except Exception as error:
            logger.error(error)
            raise

    def readfileFromDisk(self, name):
        try:
            input_file = open(self._prefix + name, 'rb')
            body = input_file.read()
            input_file.close()
            return body
        except Exception as error:
            logger.error(error)
            raise
